import React from "react";
import HeadComponent from "@/component/shared/head.component";
import Link from "next/link";
import FooterComponent from "@/component/shared/footer.component";

export default function Home() {
  return (
    <div>
      <HeadComponent />
      <div className="container px-5 lg:px-0 mt-20">
        <div className="font-weight-500 text-2xl">
          InterviewSimulator Privacy & Teams
        </div>
        <div className="grid grid-cols-4 mt-10">
          <div className="flex-col gap-2 font-weight-400 text-lg hidden md:flex">
            <Link href="#introduction" className="hover:text-blue-500 my-1">
              Introduction
            </Link>
            <Link href="#data-collection" className="hover:text-blue-500 my-1">
              Data Collection
            </Link>
            <Link href="#data-usage" className="hover:text-blue-500 my-1">
              Data Usage
            </Link>
            <Link href="#cookie-policy" className="hover:text-blue-500 my-1">
              Cookie Policy
            </Link>
            <Link href="#third-party" className="hover:text-blue-500 my-1">
              Third-Party Links
            </Link>
            <Link href="#contact-us" className="hover:text-blue-500 my-1">
              Contact Us
            </Link>
          </div>
          <div className="col-span-3 font-weight-300 md:border-l-2  md:border-l-gray-600 md:px-10">
            <div id="introduction">
              <p className="mb-3">
                <b>Welcome to InterviewSimulator&apos;s Privacy Policy.</b> This
                Privacy Policy is designed to provide you with a comprehensive
                understanding of how we collect, use, disclose, and safeguard
                your personal information. By accessing or using our website,
                you agree to the practices described in this Privacy Policy.
              </p>
              <p className="mt-2">
                At InterviewSimulator&apos;, we are committed to protecting your
                privacy and ensuring the security of your personal information.
                We understand the importance of transparency, and this Privacy
                Policy outlines our practices regarding the information we
                collect, how we use it, and the choices you have concerning your
                information.
              </p>
              <p className="mb-3">
                Please take the time to read this Privacy Policy carefully to
                make informed decisions about your personal data. If you do not
                agree with any part of this Privacy Policy, we recommend that
                you do not use our website.
              </p>
              <p className="mb-3">
                This Privacy Policy may be updated from time to time to reflect
                changes in our practices or for other operational, legal, or
                regulatory reasons. We encourage you to review this Privacy
                Policy periodically for any updates or changes.
              </p>
            </div>

            <div id="data-collection" className="mt-10">
              <p className="mb-3">
                <b>
                  At InterviewSimulator, we may collect various types of
                  information
                </b>{" "}
                from you when you visit our website. This information may
                include, but is not limited to:
              </p>
              <p className="mb-3">
                <ol className="list-decimal">
                  <li className="mb-3">
                    <b>Personal Information:</b> We may collect personal
                    information such as your name, email address, Resume(CV),
                    Job Description, and other contact details when you
                    voluntarily provide them to us. This information is
                    typically collected when you fill out forms on our website,
                    subscribe to newsletters, or contact us.
                  </li>
                  <li className="mb-3">
                    <b>Device Information:</b> We automatically collect
                    information about your device, browser, and operating system
                    when you access our website. This data helps us optimize our
                    website for different devices and improve your browsing
                    experience.
                  </li>
                  <li className="mb-3">
                    <b>Usage Data:</b> We gather data related to your usage of
                    our website, including the pages you visit, the time you
                    spend on each page, and the referring pages that led you to
                    our site. This information helps us analyze user behavior
                    and enhance our content and services.
                  </li>
                  <li className="mb-3">
                    <b>Camera and Audio Data:</b> If you grant us permission, we
                    may collect camera and audio data to provide specific
                    services or content. You can manage your camera and audio
                    settings through your device or browser preferences.
                  </li>
                </ol>
              </p>
            </div>

            <div id="data-usage" className="mt-10">
              <p className="mb-3">
                <b>At InterviewSimulator, we use the information we collect</b>{" "}
                for various purposes, which may include, but are not limited to:
              </p>
              <p className="mb-3">
                <ol className="list-decimal">
                  <li className="mb-3">
                    <strong>Providing and Maintaining Our Website:</strong> We
                    use your information to ensure the proper functioning and
                    security of our website. This includes troubleshooting
                    technical issues and preventing fraudulent activities.
                  </li>
                  <li className="mb-3">
                    <strong>Improving Our Services and User Experience:</strong>{" "}
                    We analyze collected data to enhance our website, content,
                    and services. This allows us to tailor our offerings to
                    better meet your needs and preferences.
                  </li>
                  <li className="mb-3">
                    <strong>
                      Responding to Inquiries and Providing Support:
                    </strong>{" "}
                    When you contact us with questions or requests, we use your
                    information to respond promptly and provide the necessary
                    assistance or information.
                  </li>
                  <li className="mb-3">
                    <strong>Conducting Analytics and Research:</strong> We may
                    perform statistical analysis and research to gain insights
                    into user behavior and preferences. This helps us make
                    informed decisions and further improve our website and
                    services.
                  </li>
                  <li className="mb-3">
                    <strong>Sending Updates and Promotional Materials:</strong>{" "}
                    With your consent, we may use your contact information to
                    send you updates, newsletters, promotional materials, and
                    other communications related to our products or services.
                  </li>
                </ol>
              </p>
            </div>

            <div id="cookie-policy" className="mt-10">
              <p className="mb-3">
                <b>
                  Our website uses cookies to enhance your browsing experience.
                </b>{" "}
                Cookies are small text files that are placed on your device when
                you visit a website. We use both session and persistent cookies
                for various purposes, including:
              </p>
              <ol>
                <li className="mb-3">
                  <strong>Remembering Your Preferences and Settings:</strong> We
                  use cookies to remember your preferences, such as language
                  preferences, and settings to provide you with a more
                  personalized and convenient experience.
                </li>
                <li className="mb-3">
                  <strong>Authentication:</strong> Cookies are used to
                  authenticate your login credentials when you access secured
                  areas of our website. This helps ensure the security of your
                  account.
                </li>
                <li className="mb-3">
                  <strong>Website Traffic Analysis:</strong> We employ cookies
                  to analyze website traffic and user behavior. This data helps
                  us understand how visitors interact with our website, allowing
                  us to improve our content and services.
                </li>
              </ol>

              <p className="mb-3">
                You have the option to control and manage cookies through your
                browser settings. Please note that disabling certain cookies may
                affect the functionality and user experience of our website. You
                can adjust your cookie preferences to suit your browsing
                preferences and privacy needs.
              </p>
            </div>

            <div id="third-party" className="mt-10">
              <p className="mb-3">
                <b>Our website may contain links to third-party websites</b> or
                services that are not owned or controlled by InterviewSimulator.
                These links are provided for your convenience and reference.
                Please be aware that we are not responsible for the privacy
                practices or content of these third-party websites.
              </p>

              <p className="mb-3">
                When you click on a third-party link and leave our website, we
                encourage you to read the privacy policies of those external
                sites, as their practices may differ from ours. We do not have
                control over and assume no responsibility for the content,
                privacy policies, or practices of any third-party websites or
                services linked to our site.
              </p>

              <p className="mb-3">
                InterviewSimulator disclaims any liability arising from your use
                of third-party websites or services, and you access and use them
                at your own risk. We recommend that you exercise caution and
                consider reviewing the privacy policies of those websites before
                providing any personal information.
              </p>
            </div>

            <div id="contact-us" className="mt-10">
              <p className="mb-3">
                <b>
                  If you have any questions, concerns, or requests related to
                  our Privacy Policy or Cookie Policy
                </b>
                , we welcome you to reach out to us. Your privacy is important
                to us, and we are committed to addressing any inquiries you may
                have.
              </p>

              <p className="mb-3">
                You can contact us at any time via email at{" "}
                <a
                  className="text-decoration-none"
                  href="mailto:genieaibuilder@gmail.com"
                >
                  genieaibuilder@gmail.com
                </a>
                . We aim to respond promptly to your inquiries and provide the
                necessary information or assistance.
              </p>

              <p className="mb-3">
                Additionally, please note that this Privacy Policy and Cookie
                Policy may be updated from time to time to reflect changes in
                our practices, legal requirements, or for other operational
                reasons. We encourage you to review this page periodically for
                any updates or changes.
              </p>
            </div>
          </div>
        </div>
      </div>

      <FooterComponent />
    </div>
  );
}
