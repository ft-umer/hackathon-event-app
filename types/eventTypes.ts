export type eventTypes = {
    map(arg0: (events: eventTypes) => JSX.Element): import("react").ReactNode
    id: string,
   title:string,
   date:string,
   time:string,
   location:string,
   description:string
}