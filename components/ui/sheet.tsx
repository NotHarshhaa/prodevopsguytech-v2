"use client"

import * as React from "react"
import * as SheetPrimitive from "@radix-ui/react-dialog"
import { XIcon } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

const Sheet = SheetPrimitive.Root

const SheetTrigger = SheetPrimitive.Trigger

const SheetClose = SheetPrimitive.Close

const SheetPortal = SheetPrimitive.Portal

function SheetOverlay({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Overlay>) {
  return (
    <SheetPrimitive.Overlay
      data-slot="sheet-overlay"
      className={cn(
        "fixed inset-0 z-50 bg-black/20 backdrop-blur-sm",
        "data-[state=open]:animate-in data-[state=closed]:animate-out",
        "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        "dark:bg-black/40",
        className
      )}
      {...props}
    />
  )
}

function SheetContent({
  className,
  children,
  side = "right",
  title,
  hideCloseButton = false,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Content> & {
  side?: "top" | "right" | "bottom" | "left"
  title: string
  hideCloseButton?: boolean
}) {
  const slideDirections = {
    top: {
      initial: { y: "-100%" },
      animate: { y: 0 },
      exit: { y: "-100%" }
    },
    right: {
      initial: { x: "100%" },
      animate: { x: 0 },
      exit: { x: "100%" }
    },
    bottom: {
      initial: { y: "100%" },
      animate: { y: 0 },
      exit: { y: "100%" }
    },
    left: {
      initial: { x: "-100%" },
      animate: { x: 0 },
      exit: { x: "-100%" }
    }
  }

  return (
    <SheetPortal>
      <SheetOverlay />
      <SheetPrimitive.Content
        asChild
        {...props}
      >
        <motion.div
          initial={slideDirections[side].initial}
          animate={slideDirections[side].animate}
          exit={slideDirections[side].exit}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className={cn(
            "fixed z-50 flex flex-col gap-4",
            "bg-background/95 shadow-lg backdrop-blur-xl",
            "border border-border/20",
            "transition ease-in-out",
            side === "right" && "inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",
            side === "left" && "inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
            side === "top" && "inset-x-0 top-0 h-auto border-b",
            side === "bottom" && "inset-x-0 bottom-0 h-auto border-t",
            "after:absolute after:inset-0 after:bg-gradient-to-b after:from-background/10 after:to-background/80 after:backdrop-blur-xl after:-z-10",
            "before:absolute before:inset-0 before:bg-background/50 before:-z-20",
            className
          )}
        >
          <SheetPrimitive.Title className="sr-only">{title}</SheetPrimitive.Title>
          {children}
          {!hideCloseButton && (
            <SheetPrimitive.Close className={cn(
              "absolute right-4 top-4 z-50",
              "rounded-full w-8 h-8",
              "flex items-center justify-center",
              "transition-all duration-200",
              "bg-muted/80 hover:bg-muted",
              "text-muted-foreground hover:text-foreground",
              "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ring",
              "disabled:pointer-events-none"
            )}>
              <XIcon className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </SheetPrimitive.Close>
          )}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-primary/2 to-transparent opacity-50" />
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:16px]" />
          </div>
        </motion.div>
      </SheetPrimitive.Content>
    </SheetPortal>
  )
}

function SheetHeader({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sheet-header"
      className={cn(
        "flex flex-col gap-1.5 p-6",
        "border-b border-border/10",
        "relative z-10",
        className
      )}
      {...props}
    />
  )
}

function SheetFooter({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sheet-footer"
      className={cn(
        "mt-auto flex flex-col gap-3 p-6",
        "border-t border-border/10",
        "relative z-10",
        className
      )}
      {...props}
    />
  )
}

function SheetTitle({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Title>) {
  return (
    <SheetPrimitive.Title
      data-slot="sheet-title"
      className={cn(
        "text-lg font-semibold text-foreground",
        "bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80",
        className
      )}
      {...props}
    />
  )
}

function SheetDescription({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Description>) {
  return (
    <SheetPrimitive.Description
      data-slot="sheet-description"
      className={cn(
        "text-sm text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}

export {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
}
