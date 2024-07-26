
import Answers from "@/components/multiChoiceOneAnswer";
import Question from "./question";
import Progress from "./progress";

export default function QuestionBlock(){
    return(
        <div className="w-[900px] border-4 border-white flex items-top justify-center bg-white shadow-sm my-10 pt-10">
                <div className="text-black px-2 justify-center">
                    <Progress />
                    <Question />
                    <Answers />
                </div>
        </div>
    );
}