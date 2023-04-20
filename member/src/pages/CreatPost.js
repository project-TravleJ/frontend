import style from '../components/creatcomponents/createcomponents.module.css';
import CreatMainTitle from '../components/creatcomponents/CreateMainTitle';
import CreatMainContent from '../components/creatcomponents/CreateMainContent';
import CreatIntroduce from '../components/creatcomponents/CreateIntroduce';
import CreatComent from '../components/creatcomponents/CreateComent';
import Footer from "../components/Footer";

function  CreatPost() {

    const dispatch = useDispatch();
    const selectPost = useSelector(store => store.selectedPost);
    const newPost = useSelector(store => store.createPost);
    const newCourse = useSelector(store => store.createCourse)

    const [title, setTitle] = useState("");
    const [start, setStart] = useState("");
    const [end, setEnd] = useState("");
    const [context, setContext] = useState("");
    const [courseList, setCourseList] = useState([]);
    const [idx, setIdx] = useState(0);
    const [courseMemo, setCourseMemo] = useState("");

    /* 사용 reducer : postDTO, courseDTO*/

    useEffect(() => {
        if(selectPost.postId != 0){
            dispatch(getPost(selectPost));
            setTitle(selectPost.postTitle);
            setContext(selectPost.context);
            setStart(selectPost.postStart);
            setEnd(selectPost.postEnd);
            setCourseList(selectPost.courseList);
        }
        console.log("select:",  selectPost);
    }, []
    );

    const ridePost = () => {

        const post = {
            postTitle: title,
            postStart: start,
            postEnd: end,
            context: context,
            courseList: courseList
        }

        dispatch(getPost(post));
        console.log("포스트 라 라이드")
        console.log(post);

        return post
    }

    const changeCourseMemo = (courseMemo, idx) => {

        let courses = courseList;

        courses[idx - 1].courseMemo = courseMemo;

        setCourseList(courses);
    }

    return(
            // <div className={style.maginhead }>
            <div className={ style.container}>
                <div className={ style.postbodystyle }>
                    <br/>
                    <CreatMainTitle/>
                    <CreatMainContent/>
                    <CreatIntroduce/>
                    <CreatComent/>
                </div>
            {/* </div> */}
            {/* <div className={style.maginhead }> */}
            <Footer/>
            {/* </div> */}
            </div>
    )
}

export default CreatPost;