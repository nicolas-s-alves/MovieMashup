import clsx from "clsx"


export const Button = ({ className, onclick }: HTMLButtonElement) => {

    <button
        type="button"
        onClick={() => onclick}
        className={clsx("transition-all rounded-md bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75", className)}
    >
        Overview
    </button>
}
