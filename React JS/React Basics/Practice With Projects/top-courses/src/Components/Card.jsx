import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";

const Card = (props) => {
  let likedCourses = props.likedCourses;
  let setLikedCourses = props.setLikedCourses;

  function clickHandler() {
    // Logic
    if (likedCourses.includes(props.course.id)) {
      // already liked
      setLikedCourses((prev) => prev.filter((cid) => cid !== props.course.id));
      toast.warning("Liked Removed");
    } else {
      // if not already liked
      // need to insert that course(course id) in liked course
      if (likedCourses.length === 0) {
        // if no course is liked nd we are liking the first course then just add that course id into liked course
        setLikedCourses([props.course.id]);
      } else {
        // if have already liked some courses and want to add more then we will first add th previously liked coursesw along with the
        // currently liked course with the help of spread operator
        setLikedCourses((prev) => [...prev, props.course.id]);
      }
      toast.success("Liked Successfully");
    }
  }

  return (
    <div className="bg-bgDark bg-opacity-80 w-[300px] rounded-md overflow-hidden">
      <div className="relative ">
        <img src={props.course.image.url} alt="Course Img" className="" />

        <div className="rounded-full w-[40px] h-[40px] bg-white absolute right-2 bottom-[-12px] grid place-items-center">
          <button onClick={clickHandler}>
            {likedCourses.includes(props.course.id) ? (
              <FcLike fontSize="1.75rem" />
            ) : (
              <FcLikePlaceholder fontSize="1.75rem" />
            )}
          </button>
        </div>
      </div>

      <div className="p-4">
        <p className="text-white text-lg font-semibold leading-6">
          {props.course.title}
        </p>
        <p className="mt-2 text-white">
          {props.course.description.length > 100
            ? props.course.description.substring(0, 100) + "..."
            : props.course.description}
        </p>
      </div>
    </div>
  );
};

export default Card;
