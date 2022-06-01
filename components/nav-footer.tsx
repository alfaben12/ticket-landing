import NavFooterLink from "./nav-footer-link";

function NavFooter() {
    return (
        <ul className="grid grid-cols-1 my-24 lg:grid-cols-3">
            <li className="lg:col-span-1">
                <h6 className="mb-3 text-xl font-medium">GET Twin</h6>
                <p className="text-pir-gray-500">
                    End-to-end NFT ticket maker.
                </p>
                <p className="text-pir-gray-500">
                    &copy; 2021 get-twin.com. All rights reserved.
                </p>
            </li>
            <li className="mt-6 lg:mt-0 lg:col-span-2">
                <ul className="flex flex-col justify-between md:flex-row">
                    <li className="mb-6 md:mb-0">
                        <h6 className="mb-3 text-xl font-medium">Product</h6>
                        <ul>
                            <NavFooterLink href="/#token" text="Event Token" />
                            <NavFooterLink href="/#token" text="Ticket Token" />
                            <NavFooterLink href="/explorer" text="Explorer" />
                        </ul>
                    </li>
                    <li className="mb-6 md:mb-0">
                        <h6 className="mb-3 text-xl font-medium">Resources</h6>
                        <ul>
                            <NavFooterLink
                                href={process.env.NEXT_PUBLIC_DOCS_ENDPOINT}
                                text="Documentation"
                            />
                            <NavFooterLink href="/claim" text="Claim" />
                            <NavFooterLink href="/queue" text="Queue" />
                            {/* <NavFooterLink href="/event" text="Event" /> */}
                        </ul>
                    </li>
                    <li className="mb-6 md:mb-0">
                        <h6 className="mb-3 text-xl font-medium">Social</h6>
                        <ul>
                            <NavFooterLink
                                href="https://github.com/get-twin"
                                text="Github"
                            />
                            <NavFooterLink
                                href="https://linkedin.com/get-twin"
                                text="LinkedIn"
                            />
                        </ul>
                    </li>
                    <li className="mb-6 md:mb-0">
                        <h6 className="mb-4 text-xl font-medium">Legal</h6>
                        <ul>
                            <NavFooterLink
                                href="/privacy"
                                text="Privacy Policy"
                            />
                        </ul>
                    </li>
                </ul>
            </li>
        </ul>
    );
}

export default NavFooter;
