import {FC} from "react";
import Link from "next/link";

interface PremiumLockProps {
  redirectTo?: string
}

const PremiumLock: FC<PremiumLockProps> = ({redirectTo}) => (
    <div className="flex flex-col items-center">
    <div className="shadow-md border-2 border-gray-100 rounded-lg p-4 my-4 max-w-md space-y-4">
      <div className="w-full space-y-2">
        <p className="text-gray-500 text-lg font-bold">This post is premium content.</p>
        <p>Please login to access it.</p>
      </div>
      <div className="w-full">
        <Link href={`/login?redirectTo=${redirectTo}`}>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Login
          </button>
        </Link>
      </div>
    </div>
    </div>
  )

export default PremiumLock