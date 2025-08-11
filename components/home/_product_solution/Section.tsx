import React from 'react'
import Solutions from '@/components/home/_product_solution/Solutions'

const ProductSolution = () => {
    return (
        <main className="p-6">
            <Solutions />
            <div className="flex justify-center">
                <button className=" rounded-md border border-red-600 bg-white px-8 py-3 text-red-600 hover:bg-red-200 dark:bg-transparent">
                    View More
                </button>
            </div>
        </main>
    )
}

export default ProductSolution