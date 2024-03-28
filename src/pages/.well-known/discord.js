const Sitemap = () => null

export const getServerSideProps = async ({ res }) => {
  if (res) {
    res.setHeader('Content-Type', 'text/plain')
    // doesnt matter if its public
    res.write(`dh=5f233f3228adffea0707d6beadd925081b852641`)
    res.end()
  }
  return {
    props: {},
  }
}

export default Sitemap
