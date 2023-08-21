import Image from "next/image";

export default function Success() {
  return (
    <div className="px-4 py-8 sm:p-15 flex-center flex-col gap-10 text-center">
      <h1 className="text-4xl sm:text-8xl font-medium blue-gradient">
        Form successfully submitted!
      </h1>
      <Image
        src={"/assets/images/thank_you.png"}
        alt={"Thank you Image after successfully submitting the form"}
        width={1920}
        height={1280}
        className="sm:w-4/5 sm:h-96 rounded-3xl animation-pop-in"
      />
      <p className="text-2xl sm:text-5xl font-medium text-gunmetal">Your message has been received</p>
    </div>
  );
}