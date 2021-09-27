import { GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { getSortedPostsData } from '../lib/posts'
import Layout, { siteTitle } from '../components/layout'
import Date from '../components/date'
import utilStyles from '../styles/utils.module.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

export default function Home({ allPostsData }: {
  allPostsData: {
    date: string
    title: string
    id: string
  }[]
}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>I'm a full-stack web developer with 7 years of experience in web development. I have leverage technical, analytical and problem-solving skills to create dynamic, high-speed websites, apps. My strongest skills are Laravel and Vue.js. I also have experience with AWS, Docker and CI/CD workflow.</p>
        <p>I am very flexible with difference technologies, so I am able to learn and adapt to new environments, example to go with desktop or mobile application.</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <Swiper>
            <SwiperSlide>
              <div style={{ height: '100px', backgroundColor: '#ddd' }}>1</div>
            </SwiperSlide>
            <SwiperSlide>
              <div style={{ height: '100px', backgroundColor: '#ddd' }}>2</div>
            </SwiperSlide>
            <SwiperSlide>
              <div style={{ height: '100px', backgroundColor: '#ddd' }}>3</div>
            </SwiperSlide>
            <SwiperSlide>
              <div style={{ height: '100px', backgroundColor: '#ddd' }}>4</div>
            </SwiperSlide>
            <SwiperSlide>
              <div style={{ height: '100px', backgroundColor: '#ddd' }}>5</div>
            </SwiperSlide>
            <SwiperSlide>
              <div style={{ height: '100px', backgroundColor: '#ddd' }}>6</div>
            </SwiperSlide>
        </Swiper>
      </section>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
