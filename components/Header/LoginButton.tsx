import { getCurrentUser, signIn } from 'aws-amplify/auth';
import { useState, useEffect } from "react"
import Link from 'next/link';

const LoginButton = () => {

    const [user, setUser] = useState<any>(undefined)

    useEffect(() => {
        (async () => {
            try {
                const { username, userId, signInDetails } = await getCurrentUser();
                setUser({
                    username,
                    userId,
                    ...signInDetails
                })
            } catch (e) {
                setUser(undefined)
            }
        })()
    }, [])

    return (
        <div className='flex flex-row'>
            <Link href="/profile" className="m-auto">

                {!user && (
                    <button type="button" className="  w-full flex flex-row cursor-pointer  bg-purple-600 hover:bg-purple-500 text-white font-bold py-2 px-4 rounded-lg transition">
                        Sign In
                    </button>
                )}

                {user && (
                    <div className='text-white hover:text-secondary'>
                        {/* <User /> */}
                    </div>
                )}
            </Link>
        </div>
    )
}

export default LoginButton