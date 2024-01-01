import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import { dayjs } from '@/components/DayJS'
import { useEffect, useState } from 'react'
import siteMetadata from '@/data/siteMetadata'
import { getCurrentlyReading } from '@/lib/goodreads'
import fetcher from 'lib/fetcher'
import useSWR from 'swr'
import { FaCloudShowersHeavy } from 'react-icons/fa'
import {
  BsCloudDrizzleFill,
  BsCloudsFill,
  BsCloudLightningFill,
  BsCloudSnowFill,
  BsCloudFogFill,
  BsMoonFill,
  BsClock,
  BsSunFill,
  BsFillCloudSunFill,
  BsFillCloudMoonFill,
  BsFillCloudFill,
} from 'react-icons/bs'

export const getServerSideProps = async () => {
  const WeatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=13.0878&lon=80.2785&appid=${process.env.WEATHERKEY}&units=metric`
  const response = await fetch(WeatherURL)
  const data = await response.json()

  const currentlyReading = await getCurrentlyReading({ limit: 1 })

  return {
    props: { currentlyReading, data },
  }
}

export default function Now(currentlyReading) {
  let weatherData = currentlyReading['data']
  const { temp: temperature } = weatherData.main
  const { icon: weatherIcon, description: weatherDescription } = weatherData.weather[0]

  const icons = {
    _01d: <BsSunFill className="mb-0.5 inline h-3 w-3 hover:animate-spin" />,
    _01n: <BsMoonFill className="mb-0.5 inline h-3 w-3 hover:animate-spin" />,
    _02d: <BsFillCloudSunFill className="mb-0.5 inline h-3 w-3 hover:animate-spin" />,
    _02n: <BsFillCloudMoonFill className="mb-0.5 inline h-3 w-3 hover:animate-spin" />,
    _03d: <BsFillCloudFill className="mb-0.5 inline h-3 w-3 hover:animate-spin" />,
    _03n: <BsFillCloudFill className="mb-0.5 inline h-3 w-3 hover:animate-spin" />,
    _04d: <BsCloudsFill className="mb-0.5 inline h-3 w-3 hover:animate-spin" />,
    _04n: <BsCloudsFill className="mb-0.5 inline h-3 w-3 hover:animate-spin" />,
    _09d: <BsCloudDrizzleFill className="mb-0.5 inline h-3 w-3 hover:animate-spin" />,
    _09n: <BsCloudDrizzleFill className="mb-0.5 inline h-3 w-3 hover:animate-spin" />,
    _10d: <FaCloudShowersHeavy className="mb-0.5 inline h-3 w-3 hover:animate-spin" />,
    _10n: <FaCloudShowersHeavy className="mb-0.5 inline h-3 w-3 hover:animate-spin" />,
    _11d: <BsCloudLightningFill className="mb-0.5 inline h-3 w-3 hover:animate-spin" />,
    _11n: <BsCloudLightningFill className="mb-0.5 inline h-3 w-3 hover:animate-spin" />,
    _13d: <BsCloudSnowFill className="mb-0.5 inline h-3 w-3 hover:animate-spin" />,
    _13n: <BsCloudSnowFill className="mb-0.5 inline h-3 w-3 hover:animate-spin" />,
    _50d: <BsCloudFogFill className="mb-0.5 inline h-3 w-3 hover:animate-spin" />,
    _50n: <BsCloudFogFill className="mb-0.5 inline h-3 w-3 hover:animate-spin" />,
  }

  var year = new Date().getFullYear()
  var month = new Date().getMonth()
  var date = new Date().getDate()
  var hour = new Date().getHours()
  var minute = new Date().getMinutes()
  var second = new Date().getSeconds()
  const now = () => dayjs().tz()
  const [TodayDate, setDate] = useState(now())
  const [lastUpdateTime, setLastUpdateTime] = useState(new Date())

  useEffect(() => {
    setLastUpdateTime(new Date())
  }, [])

  function formatLastUpdateTime() {
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      timeZoneName: 'short',
    }
    return lastUpdateTime.toLocaleDateString(undefined, options)
  }
  var MyBirthDate = '1998-02-22'
  var birthDate = new Date(MyBirthDate)

  var MyAge = year - birthDate.getFullYear()

  var MyMonth = 0
  if (month >= birthDate.getMonth()) MyMonth = month - birthDate.getMonth()
  else {
    MyAge--
    MyMonth = 12 + month - birthDate.getMonth()
  }

  var MyDay = 0
  if (date >= birthDate.getDate()) MyDay = date - birthDate.getDate()
  else {
    MyMonth--
    MyDay = 31 + date - birthDate.getDate()
    if (MyMonth < 0) {
      MyMonth = 11
      MyAge--
    }
  }

  var age = {}
  age = {
    years: MyAge,
    months: MyMonth,
    days: MyDay,
  }

  var ageString = ''
  if (age.years > 0 && age.months > 0 && age.days > 0)
    ageString = age.years + ' years, ' + age.months + ' months, and ' + age.days + ' days old'
  else if (age.years == 0 && age.months == 0 && age.days > 0)
    ageString = 'Only ' + age.days + ' days old'
  else if (age.years > 0 && age.months == 0 && age.days == 0)
    ageString = age.years + ' years old. Happy Birthday!!'
  else if (age.years > 0 && age.months > 0 && age.days == 0)
    ageString = age.years + ' years and ' + age.months + ' months old'
  else if (age.years == 0 && age.months > 0 && age.days > 0)
    ageString = age.months + ' months and ' + age.days + ' days old'
  else if (age.years > 0 && age.months == 0 && age.days > 0)
    ageString = age.years + ' years, and' + age.days + ' days old'
  else if (age.years == 0 && age.months > 0 && age.days == 0) ageString = age.months + ' months old'
  else ageString = "Welcome to Earth! <br> It's first day on Earth!"

  return (
    <>
      <PageSEO
        title={`Now - ${siteMetadata.author}`}
        description="What I'm working on now"
        url={siteMetadata.url}
      />
      <div>
        <div className="my-2">
          <h3>Where am I and what am I doing?</h3>
          <div className=" mt-4 mb-6 text-xs text-neutral-700 dark:text-neutral-400">
            This page was automatically updated @ {formatLastUpdateTime()}
          </div>
        </div>
        {/* Misc */}
        <div>
          <div className="-my-6 flex justify-between gap-5">
            <div className="mt-2 mb-10 w-1/2 rounded-md border border-gray-600 p-1 text-sm dark:border-gray-200">
              <div className="mt-2 mb-2">
                <span className="ml-2 font-semibold">Location:</span>
                <span>Chennai, India</span>
              </div>
              <div className="mt-2 mb-2">
                <span className="ml-2 font-semibold">Weather:</span>{' '}
                <span>
                  {icons[`_${weatherIcon}`]} Currently <b>{parseInt(temperature)}°C</b>
                  {' with '}
                  <span>{weatherDescription}</span>
                </span>
              </div>
            </div>

            <div className="mt-2 mb-10 w-1/2 rounded-md border border-gray-600 p-1 text-sm dark:border-gray-200">
              <div className="mt-2 mb-2">
                <span className="ml-2 font-semibold">Date:</span>{' '}
                <span>{TodayDate.format('DD/MM/YYYY')}</span>
              </div>
              <div className="mt-2 mb-2">
                <span className="ml-2 font-semibold">Time:</span>{' '}
                <span>
                  <BsClock className="mb-0.5 inline h-3 w-3 hover:animate-spin" />{' '}
                  {TodayDate.format('h:mm:ss A')}
                </span>
              </div>
            </div>

            <div className="mt-2 mb-10 flex w-1/2 items-center rounded-md border border-gray-600 p-1 text-sm dark:border-gray-200">
              <span className="ml-2 font-semibold">Age:</span>
              <span className="ml-1">{ageString}</span>
            </div>
          </div>
        </div>

        <div className="justify-center text-center text-2xl font-medium text-gray-200 dark:text-gray-600">
          &#126;&#126;&#126;
        </div>
        {/* Work */}
        <div className="pb-4">
          <p>
            I work as a Data Engineer at{' '}
            <Link
              href={'https://www.accenture.com/'}
              className="special-underline no-underline dark:text-gray-100 hover:dark:text-gray-100"
            >
              Accenture
            </Link>
            .
          </p>
          <br />
          <p>
            I work on building pipelines and automating the entire process using Scala and Gcloud.
          </p>
          <br />
          <p>
            I have been trying to shift my field from Data Engineering to Data Science. I have been
            constantly applying for the same as well.
          </p>
          <br />
          <p>
            My location preference is Bangalore but I am open to shift to another place for a better
            opportunity.
          </p>
          <br />
          <p>
            I'm always trying to learn more, and at the moment I'm trying to follow this{' '}
            <Link
              href={
                'https://www.youtube.com/watch?v=_u-PaJCpwiU&list=PLu0W_9lII9ai6fAMHp-acBmJONT7Y4BSG'
              }
              className="special-underline no-underline dark:text-gray-100 hover:dark:text-gray-100"
            >
              Machine Learning tutorial
            </Link>
            .
          </p>
        </div>
        <div className="justify-center text-center text-2xl font-medium text-gray-200 dark:text-gray-600">
          &#126;&#126;&#126;
        </div>

        {/* Personal life */}
        <div className="pt-6">
          <p>
            I've been slowly building this website, trying to share interesting things with anyone
            who wants to read it.{' '}
            <Link
              href={'https://www.swyx.io/learn-in-public'}
              className="special-underline no-underline dark:text-gray-100 hover:dark:text-gray-100"
            >
              This
            </Link>{' '}
            article is a great reason to start your blog.
          </p>
          <br />
          <p>
            I am also going to start applying for Masters in Data Science in August 2022 for intake
            of Fall 2023. I hope to get a good university near the West Coast. I'll update this page
            after I get my admits.
          </p>
          <br />
          <p>
            I recently started to draft a post about my new Obsidian worklfow, it will be a good
            one!
          </p>
        </div>
        <div className="mt-3 text-sm">
          For more examples of folks with /now pages, check out{' '}
          <Link
            href={'https://nownownow.com/'}
            className="special-underline no-underline dark:text-gray-100 hover:dark:text-gray-100"
          >
            nownownow.com
          </Link>
          .
        </div>
      </div>
    </>
  )
}
