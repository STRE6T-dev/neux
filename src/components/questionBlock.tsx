
import MultiChoice from "@/components/multiChoiceOneAnswer";
import Question from "./question";
import Progress from "./progress";

export default function QuestionBlock(){
    return(
        <div className="w-[800px] h-[500px] border-4 border-white flex items-top justify-center bg-white shadow-sm my-10 pt-20">
                <div className="text-black px-2">
                    <Progress />
                    <Question />
                    <MultiChoice />
                </div>
        </div>
    );
}