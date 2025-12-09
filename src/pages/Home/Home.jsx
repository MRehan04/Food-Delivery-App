import Layout from "../../components/Layouts/Layout.jsx"
import Section1 from "./Section1.jsx"
import Section2 from "./Section2.jsx"
import Section3 from "./Section3.jsx"
import Section4 from "./Section4.jsx"
import Section5 from "./Section5.jsx"
import Section6 from "./Section6.jsx"
import Section7 from "./Section7.jsx"
import '../../styles/HomeStyles.css'

function Home() {
  return (
    <Layout>
      {/* Home Section Hero Banner */}
      <Section1 />
      { /* Home Section About */}
      <Section2 />
      {/* Home Section Menu */}
      <Section3 />
      {/* Home Promotion Section */}
      <Section4 />
      {/* Home Section Shop */}
      <Section5 />
      {/* Home Section Blog */}
      < Section6 />
      {/* Home Section Contact */}
      < Section7 />
    </Layout>
  )
}

export default Home