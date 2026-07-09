
import { Button } from '../ui/button'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../ui/sheet'



const DashboardSideBar = () => {
  return (
    <>
    <div className = 'flex sm:hidden'>
      <div className = 'flex flex-1 items-center justify-center gap-4'>
<Sheet>
  <SheetTrigger>
    --
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Are you absolutely sure?</SheetTitle>
      <SheetDescription>This action cannot be undone.</SheetDescription>
       <nav className="flex flex-col gap-2">
              <Button variant="ghost">Home</Button>
              <Button variant=  "ghost">About</Button>
              <Button variant="ghost">Event</Button>
              <Button variant="default">Login</Button>
              <Button variant="default">Register</Button>
            </nav>
    </SheetHeader>
  </SheetContent>
</Sheet>
</div>
</div>
</>
  )
}

export default DashboardSideBar
