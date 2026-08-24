import Card from './components/Card'


const App = () => {

  const jobOpenings = [
  {
    brandlogo: "https://media.wired.com/photos/5926ffe47034dc5f91bed4e8/3:2/w_1920,c_limit/google-logo.jpg",
    name: "Google",
    datePosted: "4 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$35/hr",
    location: "Mumbai, India"
  },
  {
    brandlogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/3840px-Microsoft_logo.svg.png",
    name: "Microsoft",
    datePosted: "2 weeks ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$55/hr",
    location: "Bangalore, India"
  },
  {
    brandlogo: "https://1000logos.net/wp-content/uploads/2016/10/Amazon-logo-meaning.jpg",
    name: "Amazon",
    datePosted: "10 days ago",
    post: "DevOps Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$45/hr",
    location: "Hyderabad, India"
  },
  {
    brandlogo: "https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/15844974/netflixlogo.0.0.1466448626.png?quality=90&strip=all&crop=1.2535702951444%2C0%2C97.492859409711%2C100&w=2400",
    name: "Netflix",
    datePosted: "1 week ago",
    post: "UI/UX Designer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$30/hr",
    location: "Pune, India"
  },
  {
    brandlogo: "https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png",
    name: "Apple",
    datePosted: "3 weeks ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$60/hr",
    location: "Chennai, India"
  },
  {
    brandlogo: "https://cdn.pixabay.com/photo/2021/12/14/22/29/meta-6871457_1280.png",
    name: "Meta",
    datePosted: "5 days ago",
    post: "React Developer",
    tag1: "Contract",
    tag2: "Mid Level",
    pay: "$50/hr",
    location: "Gurugram, India"
  },
  {
    brandlogo: "https://static.vecteezy.com/system/resources/previews/060/100/962/non_2x/white-adobe-logo-square-rounded-adobe-logo-adobe-logo-free-download-free-png.png",
    name: "Adobe",
    datePosted: "10 weeks ago",
    post: "Product Designer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$52/hr",
    location: "Noida, India"
  },
  {
    brandlogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Spotify_App_Logo.svg/500px-Spotify_App_Logo.svg.png?_=20210620075506",
    name: "Spotify",
    datePosted: "6 days ago",
    post: "Data Analyst",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$28/hr",
    location: "Kolkata, India"
  },
  {
    brandlogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO_UF6AUy6dw9nNsUptL9xGPDDT9MAlHVkRw&s",
    name: "Salesforce",
    datePosted: "8 weeks ago",
    post: "Cloud Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$48/hr",
    location: "Ahmedabad, India"
  },
  {
    brandlogo: "https://download.logo.wine/logo/Uber/Uber-Logo.wine.png",
    name: "Uber",
    datePosted: "12 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$40/hr",
    location: "Delhi, India"
  }
];

return (
    <div className='parent'>
      {jobOpenings.map((elem ,idx)=>{
        return <div key={idx}>
          <Card company={elem.name} post={elem.post} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} location={elem.location} datePosted={elem.datePosted} logo={elem.brandlogo} />
        </div>
      })}v
    </div>
  )
}

export default App
