
export default function ProgressBar(){
    return(

        <div className="bg-white rounded-xl shadow-sm overflow-hidden p-1">
          <div className="relative h-6 flex items-center justify-center">
            <div className="absolute top-0 bottom-0 left-0 rounded-lg w-[100%] bg-indigo-200"></div>
            <div className="relative text-indigo-900 font-medium text-sm">100%</div>
          </div>
        </div>


    );
}