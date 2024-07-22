import React, { useContext, useEffect, useState } from 'react'
import summaryapi from '../Allapis'
import Context from '../context'
import displayINR from '../helpers/Displaycurrency'

const Cart = () => {
  const [data, setdata] = useState([])
  const [loading, setloading] = useState(true)

  const context = useContext(Context)
  const loadingCart = new Array(context.cartproductcount).fill(null)

  const fetchdata = async () => {
    setloading(true)
    const response = await fetch(summaryapi.productsincardview.url, {
      method: summaryapi.productsincardview.method,
      credentials: 'include',
      headers: {
        "content-type": "application/json"
      },

    })
    const datares = await response.json()
    if (datares.success) {
      setdata(datares?.data)
    }
    setloading(false)
  }
  
  useEffect(() => {
    fetchdata()
  }, [])

  return (
    <div className='container mx-auto'>
      <div className='text-center text-lg my-3'>
        {
          data?.length === 0 && !loading && (
            <p className='bg-white py-4'>you have not added product to cart</p>

          )

        }
      </div>
      <div className='flex flex-col lg:flex-row gap-10 lg:justify-between p-4'>
        <div className='w-full max-w-3xl'>
          {
            loading ? (
              loadingCart.map(ele => {
                return (
                  <div key={ele+"Add to Cart Loading"} className='w-full bg-slate-200 h-32 my-2 border border-slate-300 animate-pulse rounded'>

                  </div>
                )
              })

            ) : (
              data?.map((product,index)=>{
              return(
                <div key={product?._id + "Add to Cart Loading"} className='w-full bg-white h-32 my-2 border border-slate-300 rounded grid grid-cols-[128px,1fr]'>
                    <div className='w-32 h-32 bg-slate-200'>
                      <img src={product?.productId?.productImage[0]} className='w-full h-full object-scale-down mix-blend-multiply'/>
                      </div>
                      <div className='px-4 py-2'>
                        <h2 className='text-lg lg:text-xl text-ellipsis line-clamp-1'>{product?.productId?.productName}</h2>
                        <p className='capitalize text-slate-500'>{product?.productId.category}</p>
                        <p>{displayINR(product?.productId?.selling)}</p>
                        <div className='flex items-center gap-3 mt-1'>
                          <button className='border border-red-600 text-red-600 hover:bg-red-600 hover:text-white w-6 h-6 flex justify-center items-center rounded'>-</button>
                          <span>{product?.quantity}</span>
                          <button className='border border-red-600 text-red-600 hover:bg-red-600 hover:text-white w-6 h-6 flex justify-center items-center rounded'>+</button>
                        </div>
                      </div>

                   
                </div>
              )

              })
            )
          }
        </div>


        <div className='mt-5 lg:mt-0 w-full max-w-sm'>
          {
            loading ? (
              <div className='h-36 bg-slate-200 border-slate-300 animate-pulse'>
                total
              </div>
            ) :
              (
                <div className='h-36 bg-slate-200'>
                  total
                </div>
              )
          }

        </div>
      </div>



    </div>
  )
}

export default Cart