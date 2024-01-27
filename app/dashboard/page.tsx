import {Card} from '@/app/ui/dashboard/cards';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import {lusitana} from '@/app/ui/fonts';
import {fetchRevenue, fetchLatestInvoices, fetchCardData} from '@/app/lib/data';
import {NavBar} from "@/app/ui/navbar";
import {Hero} from "@/app/ui/hero";
// import {NavBar} from "@/app/ui/navbar";
import Navbar1 from "@/app/ui/navbar1";
import {Table} from "@/app/ui/table";
import {DevCard} from "@/app/ui/dev-card";
import {ProductSearch} from "@/app/ui/product-search";
import {ProductPage} from "@/app/ui/product-page";
import {ProfilePage} from "@/app/ui/profile";

export default async function Page() {


    return (
        <main>
            <div className="mt-4">
                {/*<NavBar></NavBar>*/}
                <Navbar1></Navbar1>
            </div>
            <div className="container mx-auto mt-16">

                <Table/>

            </div>
            <div className="flex container mx-auto my-16 justify-around gap-16">

                <DevCard/>
                <DevCard/>
            </div>

            <div className="flex container mx-auto my-32">
                <ProductSearch/>
            </div>

            <div className="flex container mx-auto my-32">
                <ProductPage/>
            </div>

            <div className="container mx-auto my-32 w-1/2 ">
                <ProfilePage/>
            </div>

        </main>
    );
}