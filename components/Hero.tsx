import { Button, IconBookOpen, Space, Typography } from "@supabase/ui";
import Link from "next/link";
import { useRouter } from "next/router";
import SectionContainer from "./Layouts/SectionContainer";

const Hero = () => {
  const { basePath } = useRouter();

  return (
    <div className="overflow-hidden">
      <SectionContainer className="pb-0 pt-24">
        <div className="relative">
          <main className="">
            <div className="mx-auto">
              <div className="lg:grid lg:grid-cols-12 lg:gap-16">
                <div className="md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center">
                  <div className="sm:mx-auto md:w-3/4 lg:w-full lg:mx-0">
                    <h1 className="mt-4 text-4xl text-gray-800 dark:text-white sm:mt-5 sm:leading-none lg:mt-6 lg:text-5xl xl:text-6xl">
                      <span className="block text-gray-800 dark:text-white">
                        The developers
                      </span>
                      <span className="text-brand-600 md:ml-0 block">
                        revolutionizing the internet
                      </span>
                    </h1>
                    <Typography.Text>
                      <p className="mt-5 text-base sm:mt-5 lg:text-lg ">
                        Whether you're programming, messing around, or gaming on
                        a computer, you will always need an especially important
                        tool - the internet. What if what you're doing isn't
                        entertaining enough? This is where system41 kicks in.
                        System41 tries to make the internet more fun for you to
                        visit.
                      </p>
                    </Typography.Text>
                    <Space>
                      <Link
                        href="https://app.supabase.io"
                        as="https://app.supabase.io"
                      >
                        <a className="mt-10">
                          <Button className="py-3" size="medium">
                            Start your project
                          </Button>
                        </a>
                      </Link>
                      <Link href="/docs" as="/docs">
                        <a className="mt-10">
                          <Button
                            className="py-3"
                            size="medium"
                            type="text"
                            icon={<IconBookOpen />}
                          >
                            Documentation
                          </Button>
                        </a>
                      </Link>
                    </Space>
                  </div>
                </div>
                <div className="flex content-center mt-16 sm:mt-24 lg:absolute lg:-right-80 lg:w-9/12 lg:mt-0 lg:col-span-6 xl:relative xl:right-0 xl:w-full">
                  <div className="flex flex-col items-center justify-center relative w-full rounded-md">
                    <div className="w-full rounded-t-md h-5 bg-dark-700 flex items-center justify-start px-2">
                      <div className="h-2 w-2 mr-2 rounded-full bg-dark-500" />
                      <div className="h-2 w-2 mr-2 rounded-full bg-dark-500" />
                      <div className="h-2 w-2 mr-2 rounded-full bg-dark-500" />
                    </div>
                    <div
                      className="w-full relative bg-dark-900 shadow-lg rounded-b-md"
                      style={{ padding: "56.25% 0 0 0" }}
                    >
                      <video
                        title="Demo video showcasing open99"
                        className="absolute w-full h-full rounded-b-md"
                        style={{ top: 0, left: 0 }}
                        autoPlay
                        muted
                        loop
                        onClick={function(){this.muted = false}}
                      >
                        <source src="videos/open99Intro.mp4" type="video/mp4" />
                      </video>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </SectionContainer>
    </div>
  );
};

export default Hero;
