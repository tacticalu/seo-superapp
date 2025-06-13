import { Dialog as AriaDialog, type DialogProps } from 'react-aria-components'
import { twMerge } from 'tailwind-merge'

export function Dialog(props: DialogProps) {
  return (
    <AriaDialog
      {...props}
      className={twMerge(
        'relative max-h-[inherit] overflow-auto p-6 outline outline-0 [[data-placement]>&]:p-4',
        props.className
      )}
    />
  )
}
