
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
    </SheetHeader>
  </SheetContent>
</Sheet>
</div>
</div>
</>
  )
}

export default DashboardSideBar
