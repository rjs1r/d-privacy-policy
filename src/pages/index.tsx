import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <main className="py-6 px-8 md:px-64">
      <h1 className="text-2xl font-bold md:text-3xl">Privacy Policy</h1>
      <p className="my-6 max-w-3xl">
        This Privacy Policy describes how Dmart Deals collects, uses and shares
        your personal data.
      </p>
      <h1 className="text-2xl font-bold md:text-3xl">
        Information Collection and Use
      </h1>
      <p className="my-6 max-w-3xl">
        The information we collect from you is used for providing you with a
        better experience and improving our own service. The information we is
        used to identify and authenticate you for the purpose of proper
        functionality of the app. The required information such as your mobile
        number, device name and a device ID; is collected to authenticate you to
        show you the appropriate content.
      </p>
      <h1 className="text-2xl font-bold md:text-3xl">Security</h1>
      <p className="my-6 max-w-3xl">
        We value your trust in providing us your Personal Information, thus we
        focus on the protection of the valuable information you provide to us,
        and so any sensitive data (such as any personal and transaction info) is
        stored encrypted in our servers. The data is only kept in our database
        only for as long as necessary. And no data is shared with third parties.
      </p>
      <p className="my-6 max-w-3xl"></p>
      <h1 className="text-2xl font-bold md:text-3xl">Cookie Policy</h1>
      <p className="my-6 max-w-3xl">
        Cookies are files with small amount of data that is commonly used an
        anonymous unique identifier. These are sent to your browser from the
        website that you visit and are stored on your computer’s hard drive. We
        do not use any cookies for any sort of data collection or
        personalization.
      </p>
      <h1 className="text-2xl font-bold md:text-3xl">
        Potential Future Changes To Privacy Policy
      </h1>
      <p className="my-6 max-w-3xl">
        We may update our Privacy Policy from time to time. Thus, we advise you
        to review this page periodically for any changes. These changes are
        effective immediately, after they are posted on this page.
      </p>
    </main>
  );
};

export default Home;
