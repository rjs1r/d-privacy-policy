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
        better experience and improving our own service. The information we
        collect from the mobile app can be divided into two categories.
      </p>
      <p className="my-6 max-w-3xl">
        The first category is used to identify and authenticate you for the
        purpose of proper functionality of the app. The required information
        such as your mobile number, and basic device id and other info; is
        collected to uniquely identify you to show you the appropriate content.
      </p>
      <p className="my-6 max-w-3xl">
        The second category is mainly used for developer communications and
        personalization. We collect SMS messages which are kept for a short
        period of time in our data servers for the purpose of improving our
        service.
      </p>
      <h1 className="text-2xl font-bold md:text-3xl">Security</h1>
      <p className="my-6 max-w-3xl">
        We value your trust in providing us your Personal Information, thus we
        focus on the protection of the valuable information your provide to us
        and keep it in our database only for as long as necessary, after which
        we appropriately delete it without any trace left behind.
      </p>
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
        to review this page periodically for any changes. We will notify you of
        any changes by posting the new Privacy Policy on this page. These
        changes are effective immediately, after they are posted on this page.
      </p>
    </main>
  );
};

export default Home;
