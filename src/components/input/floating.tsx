import React from 'react'

const FloatingInput = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
    (
        { id, placeholder, className, ...props },
        ref
    ) => {
        return (
            <div className="mx-auto">
                <div>
                    <div className="relative">
                        <input
                            ref={ref}
                            id={id}
                            placeholder=" "
                            className="peer block w-full rounded-md border-gray-300 shadow-sm disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
                            {...props}
                        />
                        <label
                            htmlFor={id}
                            className="peer-focus:base absolute left-2 top-0 z-10 -translate-y-2 transform bg-white px-1 text-xs text-gray-500 transition-all peer-placeholder-shown:translate-y-3 peer-placeholder-shown:text-sm peer-focus:-translate-y-2 peer-focus:text-xs peer-disabled:bg-transparent">
                            {placeholder}
                        </label>
                    </div>
                </div>
            </div>
        )
    })

export default FloatingInput