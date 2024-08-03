
import SectionTitle from "../../components/sectionTitle";
import Cta from "../../components/cta";
import CardLanguages from "../../components/cardLanguages";
import Container from "../../components/container";
import CoursesItem from "../../components/coursesItem";

const Courses = () => {

    /**
     *  Curses Item
     */

    return (
        <>
            <Container>
                <SectionTitle
                    pretitle=""
                    title={'Discover Our Comprehensive Courses'}
                >
                    At TalkHub, we are dedicated to providing top-notch courses that empower you to learn, contribute, and seize exciting opportunities in the ever-evolving world of technology. Whether you're looking to enhance your skills or start a new career, our courses are designed to guide you through your journey of discovery and growth.
                </SectionTitle>
                {/* <CardLanguages /> */}
                <div className="mt-10">
                    <CoursesItem />
                </div>
                <Cta />
            </Container>
        </>
    )
};

export default Courses;