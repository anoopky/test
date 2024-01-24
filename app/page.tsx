import AcmeLogo from '@/app/ui/acme-logo';
import {ArrowRightIcon} from '@heroicons/react/24/outline';
import Link from 'next/link';
import {lusitana} from '@/app/ui/fonts';
import Image from 'next/image';
import {Button} from "@/app/ui/button";
import {NavBar} from "@/app/ui/navbar";
import {Hero} from "@/app/ui/hero";
import {Input} from "@/app/ui/input";


export default function Page() {
    return (
        <div>
            <div className="flex gap-2 mt-4 ml-4">
                <Button className={"w-64"} variant={"primary"}>Button</Button>
                <Button loading={true}>Button</Button>
                <Button variant={"outline"}>Button</Button>
                <Button variant={"danger"}>Button</Button>
            </div>

            <div className="flex gap-2 mt-4 ml-4">
                <NavBar></NavBar>
            </div>


            <div className="flex gap-2 mt-4 ml-4">
                <Hero/>
            </div>


            <div className="flex gap-2 mt-4 ml-4">
                <Input/>
            </div>


        </div>
    )
        ;
}
