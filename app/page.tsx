import AcmeLogo from '@/app/ui/acme-logo';
import {ArrowRightIcon} from '@heroicons/react/24/outline';
import Link from 'next/link';
import {lusitana} from '@/app/ui/fonts';
import Image from 'next/image';
import {Button} from "@/app/ui/button";
import {NavBar} from "@/app/ui/navbar";
import {Hero} from "@/app/ui/hero";
import {Input} from "@/app/ui/input";
import {Footer} from "@/app/ui/footer";
import {FooterSmall} from "@/app/ui/footer1";
import {ProductFeatures} from "@/app/ui/product-features";
import {Login} from "@/app/ui/login";
import {Register} from "@/app/ui/register";
import {ForgotPassword} from "@/app/ui/forgot";


export default function Page() {
    return (
        <div>
            <div className="flex gap-2 mt-4 ml-4">
                <Button className={"w-64"} variant={"primary"}>Button</Button>
                <Button loading={true}>Button</Button>
                <Button variant={"outline"}>Button</Button>
                <Button variant={"danger"}>Button</Button>
            </div>

            <div className="mt-4">
                <NavBar></NavBar>
                <Hero/>
            </div>


            <div className="mt-4 mb-32">
                <ProductFeatures/>
            </div>


            {/*<div className="flex mt-4">*/}
            {/*    <Input/>*/}
            {/*</div>*/}

            <div className="flex mt-4">
                <Footer/>
            </div>

            <div className="flex">
                <FooterSmall/>
            </div>

            LOGIN
            <div className="mt-4">
                <NavBar></NavBar>
            </div>
            <div className="mt-4">
                <Login/>
            </div>


            <div className="flex">
                <FooterSmall/>
            </div>


            Register
            <div className="mt-4">
                <NavBar></NavBar>
            </div>
            <div className="mt-4">
                <Register/>
            </div>


            <div className="flex">
                <FooterSmall/>
            </div>

            Forgot Password
            <div className="mt-4">
                <NavBar></NavBar>
            </div>
            <div className="mt-4">
                <ForgotPassword/>
            </div>


            <div className="flex">
                <FooterSmall/>
            </div>


        </div>
    )
        ;
}
