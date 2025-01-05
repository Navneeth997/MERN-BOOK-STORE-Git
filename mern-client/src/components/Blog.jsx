import React from 'react'
import { Button, Timeline } from "flowbite-react";
import { HiArrowNarrowRight, HiCalendar } from "react-icons/hi";

const Blog = () => {
  return (
    <div className='mt-28 px-4 lg:px-24'>
    <Timeline>
    <Timeline.Item>
      <Timeline.Point icon={HiCalendar} />
      <Timeline.Content>
        <Timeline.Time>December 27, 2023</Timeline.Time>
        <Timeline.Title>Horror Authors for Halloween</Timeline.Title>
        <Timeline.Body>
        Now, I love a good scare, especially around this time of year when that’s kinda the whole point of the holiday…to be frightened.
         Here are some authors and their books to bring you the chills.
        </Timeline.Body>
        {/* <Button color="gray">
          Learn More
          <HiArrowNarrowRight className="ml-2 h-3 w-3" />
        </Button> */}
      </Timeline.Content>
    </Timeline.Item>
    <Timeline.Item>
      <Timeline.Point icon={HiCalendar} />
      <Timeline.Content>
        <Timeline.Time>October 2023</Timeline.Time>
        <Timeline.Title>6 Gothic Classics to Finish Off the Halloween Season</Timeline.Title>
        <Timeline.Body>
        You likely have heard of these titles, but if you haven’t, then you’re in for a treat! No tricks here, 
        just some eerie gothic literature to finish off the Halloween season.
        </Timeline.Body>
      </Timeline.Content>
    </Timeline.Item>
    <Timeline.Item>
      <Timeline.Point icon={HiCalendar} />
      <Timeline.Content>
        <Timeline.Time>September 2023</Timeline.Time>
        <Timeline.Title>What Makes A Writer Regret Reading Their Own Book?</Timeline.Title>
        <Timeline.Body>
        How often do you think that authors reread their published books, just for the joy of it? Most novelists and writers probably
         tend to avoid reading their own work, because they rarely consider their work finished.
        </Timeline.Body>
      </Timeline.Content>
    </Timeline.Item>

    <Timeline.Item>
      <Timeline.Point icon={HiCalendar} />
      <Timeline.Content>
        <Timeline.Time>August 27, 2023</Timeline.Time>
        <Timeline.Title>Tying it All Together – The Writer’s Nightmare</Timeline.Title>
        <Timeline.Body>
        As I’m sure most everyone is aware, every writer has their own strengths and weaknesses when it comes to writing stories. Some can write everything but the perfect ending, 
        while others might have a start and end of an epic with no epic to fill the space between. 
        </Timeline.Body>
        {/* <Button color="gray">
          Learn More
          <HiArrowNarrowRight className="ml-2 h-3 w-3" />
        </Button> */}
      </Timeline.Content>
    </Timeline.Item>

    <Timeline.Item>
      <Timeline.Point icon={HiCalendar} />
      <Timeline.Content>
        <Timeline.Time>June 27, 2023</Timeline.Time>
        <Timeline.Title>Author Visits and 4 Great Questions Kids Have Asked</Timeline.Title>
        <Timeline.Body>
        Before the pandemic, authors made in-person visits to promote their books. Authors of children’s 
        books visited schools and libraries. The pay for these visits was usually – well, zero. 
        </Timeline.Body>
        {/* <Button color="gray">
          Learn More
          <HiArrowNarrowRight className="ml-2 h-3 w-3" />
        </Button> */}
      </Timeline.Content>
    </Timeline.Item>

    <Timeline.Item>
      <Timeline.Point icon={HiCalendar} />
      <Timeline.Content>
        <Timeline.Time>May 15, 2023</Timeline.Time>
        <Timeline.Title>The 7 Stages of…Rejection (As a Writer)</Timeline.Title>
        <Timeline.Body>
        Shock. Denial. Anger… Most people will recognize the seven stages of grief most often associated with the tragic death of a loved one. I am a writer. I lose loved ones, 
        too, but sometimes those loved ones are on paper or hidden in the magic of a computer file. 
        </Timeline.Body>
        {/* <Button color="gray">
          Learn More
          <HiArrowNarrowRight className="ml-2 h-3 w-3" />
        </Button> */}
      </Timeline.Content>
    </Timeline.Item>

    <Timeline.Item>
      <Timeline.Point icon={HiCalendar} />
      <Timeline.Content>
        <Timeline.Time>April 16, 2023</Timeline.Time>
        <Timeline.Title>Stephen King Books Chronological Order</Timeline.Title>
        <Timeline.Body>
        We’ve been getting a lot of visitors coming to that page, so there must be a need.
         I thought it would be nice if we did the same for another author who has published…
        </Timeline.Body>
        {/* <Button color="gray">
          Learn More
          <HiArrowNarrowRight className="ml-2 h-3 w-3" />
        </Button> */}
      </Timeline.Content>
    </Timeline.Item>

    <Timeline.Item>
      <Timeline.Point icon={HiCalendar} />
      <Timeline.Content>
        <Timeline.Time>February 20, 2023</Timeline.Time>
        <Timeline.Title>Booksellers: A History & Homage</Timeline.Title>
        <Timeline.Body>
        The story of published books from paper form to printed page dates back to ancient times. Worldwide, written words found their way onto scrolled manuscripts made of papyrus or
         parchment, their edges sometimes mounted onto rollers for ease of opening and closing.
        </Timeline.Body>
        {/* <Button color="gray">
          Learn More
          <HiArrowNarrowRight className="ml-2 h-3 w-3" />
        </Button> */}
      </Timeline.Content>
    </Timeline.Item>
  </Timeline>
  </div>
  )
}

export default Blog
