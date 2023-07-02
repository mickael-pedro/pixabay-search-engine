export default function SearchBar({value, onChange}) {
    return (
        <div class="w-full max-w-xs mt-3 mb-3">
            <input 
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="query" 
                type="text"
                placeholder="Search..."
                onChange={onChange}
            />
        </div>
    );
}