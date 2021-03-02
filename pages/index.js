import Head from 'next/head'

export default function Home({ fromEnv, fromEnvProd }) {
  return (
    <div className="container">
      <main>
        <h1 className="title">
          Env read by Vercel platform
        </h1>

        <div>fromEnv: {fromEnv}</div>
        <div>fromEnvProd: {fromEnvProd}</div>
      </main>
    </div>
  )
}

export async function getServerSideProps () {
  const fromEnv = process.env.FROM_ENV || 'not set'
  const fromEnvProd = process.env.FROM_ENV_PROD || 'not set'

  return {
    props: {
      fromEnv,
      fromEnvProd
    }
  }
}
