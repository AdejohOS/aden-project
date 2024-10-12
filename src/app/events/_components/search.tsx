import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

const Search = () => {
    return ( 
        
            <div className="relative flex-1" >
                <Input
                    placeholder="Search for an event"
                    className="w-full pl-8"
                />
                <SearchIcon className="w-4 h-4 text-slate-500 absolute top-[50%] translate-y-[-50%] left-3"/>
            </div>
        
     );
}
 
export default Search;