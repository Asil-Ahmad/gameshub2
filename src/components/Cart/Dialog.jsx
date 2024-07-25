import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogFooter,
  DialogBody,
} from "@material-tailwind/react";

export function DialogDefault() {
  const [size, setSize] = React.useState(null);

  const handleOpen = (value) => setSize(value);

  return (
    <>
      <button
        className="bg-[#00C248] hover:bg-[#0b8036] mt-[44px] py-[13px] text-[20px] 
      uppercase w-full text-center rounded-full font-bold text-white "
        onClick={() => handleOpen("xs")}
      >
        Checkout
      </button>
      <Dialog
        open={
          size === "xs" ||
          size === "sm" ||
          size === "md" ||
          size === "lg" ||
          size === "xl" ||
          size === "xxl"
        }
        size={size || "md"}
        handler={handleOpen}
      >
        <DialogHeader>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1"
            stroke="green"
            className="w-full h-40 animate-jump-in animate-duration-1000 animate-ease-in"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </DialogHeader>
        <DialogBody className="text-center text-3xl">
          Thank You for Your Purchase!
        </DialogBody>
        <DialogBody className="text-center ">
          Your order was completed successfully.
        </DialogBody>
        <DialogFooter className="flex items-center justify-center">
          <Button
            variant="gradient"
            color="green"
            onClick={() => handleOpen(null)}
          >
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
