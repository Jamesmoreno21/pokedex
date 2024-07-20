import { Input } from "@headlessui/react";
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";

interface SearchBarProps {
  placeholder: string;
  onSearch: (searchTerm: string) => Promise<void> | void;
  value: string;
}

export const SearchBar = ({ placeholder, onSearch, value}: SearchBarProps) => {
  const onTextChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value;
    onSearch(searchTerm);
  };

  return (
    <div className="input input-warning relative flex items-center bg-white rounded-md p-4 w-full mb-4">
      <MagnifyingGlassIcon className="absolute left-3 w-6 h-6 text-gray-400" />
      <Input
        className=" w-full pl-6 focus:outline-none text-gray-700"
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={onTextChange}
      />
    </div>
  );
};
