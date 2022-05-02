import NavFooterLink from "./nav-footer-link";

function NavFooter() {
  return (
    <ul className="grid grid-cols-1 my-24 lg:grid-cols-3">
      <li className="lg:col-span-1">
        <h6 className="mb-3 text-xl font-medium">Get Twin</h6>
        <p className="text-pir-gray-500">End-to-end NFT ticket maker.</p>
        <p className="text-pir-gray-500">
          &copy; 2021 get-twin.com. All rights reserved.
        </p>
      </li>
      <li className="mt-6 lg:mt-0 lg:col-span-2">
        <ul className="flex flex-col justify-between md:flex-row">
          <li className="mb-6 md:mb-0">
            <h6 className="mb-3 text-xl font-medium">Product</h6>
            <ul>
              <NavFooterLink href="/event" text="Event NFT" />
              <NavFooterLink href="/ticket" text="Ticket NFT" />
              <NavFooterLink
                href="/explorer"
                text="Explorer"
              />
            </ul>
          </li>
          <li className="mb-6 md:mb-0">
            <h6 className="mb-3 text-xl font-medium">Resources</h6>
            <ul>
              <NavFooterLink href="/#documentation" text="Documentation" />
              <NavFooterLink href="/#changelog" text="Changelog" />
            </ul>
          </li>
          <li className="mb-6 md:mb-0">
            <h6 className="mb-3 text-xl font-medium">Social</h6>
            <ul>
              <NavFooterLink href="/#github" text="Github" />
              <NavFooterLink href="/#linkedin" text="LinkedIn" />
            </ul>
          </li>
          <li className="mb-6 md:mb-0">
            <h6 className="mb-4 text-xl font-medium">Legal</h6>
            <ul>
              <NavFooterLink
                href="/#terms-conditions"
                text="Terms and Conditions"
              />
              <NavFooterLink href="/#privacy-policy" text="Privacy Policy" />
              <NavFooterLink href="/#legal-notice" text="Legal Notice" />
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  );
}

export default NavFooter;
