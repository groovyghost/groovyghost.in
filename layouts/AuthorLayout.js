import Image from '@/components/Image'
import { PageSEO } from '@/components/SEO'
import Link from '@/components/Link'
import Experience from '@/components/Experience'
import experienceData from '@/data/experienceData'
import { RoughNotation } from 'react-rough-notation'
import { AiOutlineTwitter } from 'react-icons/ai'

export default function AuthorLayout({ frontMatter }) {
  const { name, avatar, occupation, company, text1 } = frontMatter

  return (
    <>
      <PageSEO title={`About - ${name}`} description={`A little trivia me`} />
      <div className="">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5 md:pl-16">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            About
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center space-x-2 pt-8 xl:sticky xl:top-0">
            <Image
              src={avatar}
              alt="avatar"
              width="192px"
              height="192px"
              className="h-48 w-48 rounded-full xl:rounded-full"
              placeholder="blur"
              blurDataURL="/static/images/SVG-placeholder.png"
            />
            <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">{name}</h3>
            <div className="text-gray-500 dark:text-gray-400">{occupation}</div>
            <div className="text-gray-500 dark:text-gray-400">{company}</div>
          </div>
          <div className="prose max-w-none pt-8 pb-8 dark:prose-dark xl:col-span-2">
            <p>
              <RoughNotation
                type="bracket"
                brackets={['left', 'right']}
                show={true}
                color="#FF0000"
                animationDelay={300}
                animationDuration={3000}
              >
                {text1} Currently, I am focused on building devops pipelines and automating them at{' '}
                <Link
                  href={'https://www.contus.com/'}
                  className="special-underline no-underline hover:text-gray-100 dark:text-gray-100 hover:dark:text-gray-100"
                >
                  Contus
                </Link>
              </RoughNotation>
            </p>
            <br />
            <p>
              This is what I am doing right{' '}
              <Link
                href={'/now'}
                className="special-underline no-underline hover:text-gray-100 dark:text-gray-100 hover:dark:text-gray-100"
              >
                now
              </Link>
            </p>
            <br />
            <p>
              I am always looking to learn new things. I am currently working on a few projects
              related to{' '}
              <RoughNotation
                type="underline"
                show={true}
                color="#0ea4e9"
                animationDelay={1500}
                animationDuration={3000}
                multiline={true}
              >
                <span className="text-black dark:text-white">DSA and Frontend development.</span>
              </RoughNotation>{' '}
            </p>

            <br />
            <p>
              I am a strong advocate for open source and I am always interested in working on new
              projects with new people. Feel free to reach out if you have anything to talk about,
              you can reach me through{' '}
              <Link
                href={'mailto:grovyghost@protonmail.com'}
                className="special-underline no-underline hover:text-gray-100 dark:text-gray-100 hover:dark:text-gray-100"
              >
                Mail
              </Link>{' '}
            </p>
            <br />
            <br />
            <h1>About this site</h1>
            <p>
              Welcome to my home on the internet. This site functions as a blog/portfolio, a place
              to share code and thoughts. Opinions are my own.
            </p>
            <p>
              I learnt how to build this site from the most awesome people in the community:
              <ul>
                <li>
                  <Link
                    href={'https://github.com/timlrx/tailwind-nextjs-starter-blog/tree/v1.5.5'}
                    className="special-underline no-underline hover:text-gray-100 dark:text-gray-100 hover:dark:text-gray-100"
                  >
                    Timothy's Next.js and Tailwind CSS template
                  </Link>
                  : Template starter where I bootstrapped the project.
                </li>
                <li>
                  <Link
                    href={'https://parthdesai.vercel.app/'}
                    className="special-underline no-underline hover:text-gray-100 dark:text-gray-100 hover:dark:text-gray-100"
                  >
                    Parth Desai
                  </Link>
                  : Now page, navigation style, animations and much more.
                </li>
              </ul>
            </p>
          </div>
        </div>
        <div className="mt-10 md:pl-16">
          <div className="space-y-2 pt-6 pb-8 md:space-y-5">
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
              Experience
            </h1>
          </div>
          <div className="max-w-none pt-8 pb-8 xl:col-span-2">
            {experienceData.map((d) => (
              <Experience
                key={d.company}
                title={d.title}
                company={d.company}
                location={d.location}
                range={d.range}
                url={d.url}
                text1={d.text1}
                text2={d.text2}
                text3={d.text3}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
