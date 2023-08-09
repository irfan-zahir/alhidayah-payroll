"use client"
import Head from 'next/head'
import { useEffect, useState } from 'react'
import FloatingInput from '~/components/input/floating'
import { RecaptchaVerifier, signInWithPhoneNumber, ConfirmationResult } from 'firebase/auth'
import { auth } from "~/lib/firebase"
import { useForm, SubmitHandler } from "react-hook-form"

type PhoneFormHandler = SubmitHandler<{ phone?: string }>
type CodeFormHandler = SubmitHandler<{ code?: string }>

export default function Login() {
    const [confirmCode, setConfirmCode] = useState<ConfirmationResult["confirm"] | undefined>()
    const [countryCode, setCountryCode] = useState("6")
    const [loading, setloading] = useState(false)

    const { register, handleSubmit, watch, formState: { errors } } = useForm()

    const sendOTP: PhoneFormHandler = ({ phone }) => {
        const appVerifier = window.recaptchaVerifier
        if (appVerifier) {
            if (phone !== null)
                signInWithPhoneNumber(auth, `+${countryCode}${phone}`, appVerifier)
                    .then(({ confirm }) => setConfirmCode(confirm))
                    .catch(e => console.error("phone sign in: ", e))
        }
    }

    useEffect(() => {
        window.recaptchaVerifier = new RecaptchaVerifier('captcha-container', { size: 'invisible' }, auth)

        return () => { }
    }, [])



    const verifyCode: CodeFormHandler = async ({ code }) => (confirmCode && code)
        && await confirmCode(code)
            .then()
            .catch(e => {
                console.error("verifying OTP code: ", e)
                setConfirmCode(undefined)
            })

    return (
        <>
            <Head>
                <title>Login - Al-Hidayah Payroll</title>
            </Head>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        className="mx-auto h-10 w-auto"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                        alt="Your Company"
                    />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Sign in to your account
                    </h2>
                    <div id="captcha-container"></div>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form
                        onSubmit={handleSubmit(confirmCode === null ? sendOTP : verifyCode)}
                        className="space-y-6"
                    >
                        {
                            !confirmCode
                                ? (

                                    <FloatingInput
                                        id='phone'
                                        placeholder='Phone number'
                                        {...register("phone")} />
                                )
                                : (

                                    <FloatingInput
                                        id='code'
                                        placeholder='6-digit OTP code'
                                        {...register("code")} />
                                )
                        }

                        <div>
                            {
                                !confirmCode &&
                                <button
                                    id='send-code-button'
                                    className="flex mx-auto w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Sign in
                                </button>
                            }
                            {

                                confirmCode && <button
                                    className="flex mx-auto w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Verify code
                                </button>
                            }
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}