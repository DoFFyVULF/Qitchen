"use client"
import { TimeInput } from "@heroui/date-input";
import { Time } from "@internationalized/date";
import * as React from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import '../reservation/reservation.scss';

export default function Reservation() {

    const [date, setDate] = React.useState<Date>()

    return (
        <div className="reservation-wrapper">
            <div className="reservation-title">
                <h4>Book a table</h4>
            </div>
            <div className="reservation-form-wrapper">
                <div className="reservation-form-title">
                    <h2>Reservation</h2>
                    <p>Secure your spot at Qitchen, where exceptional sushi and a remarkable dining experience await.</p>
                </div>
                <form action="#" className='reservation-form'>
                    <input type="text" name="name" id="name" placeholder='Your Name' />
                    <input type="phone" name="phone" id="phone" placeholder='Phone Number' />
                    <input type="email" placeholder='Email' />
                    <div className="reservation-form-info">
                        <input type="number" min={1} max={20} placeholder='Enter a number of guests'/>
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button
                                    variant={"default"}
                                    className={cn(
                                        "w-[280px] justify-start text-left font-normal bg-black reservation-input ",
                                        !date && "text-muted-foreground"
                                    )}
                                >
                                    <CalendarIcon className="mr-2 h-4 w-4 " />
                                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0 bg-black">
                                <Calendar
                                    mode="single"
                                    selected={date}
                                    onSelect={setDate}
                                    initialFocus
                                />
                            </PopoverContent>
                        </Popover>
                        <TimeInput className='reservation-time p-1.5' defaultValue={new Time(9, 11)} label="Reservation Time" />
                    </div>
                    <button className='form-sbmt-btn' type="submit">Reserve</button>
                </form>
            </div>
        </div>
    )
}