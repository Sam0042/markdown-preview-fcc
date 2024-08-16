import { marked } from 'marked'
import { useState } from 'react'
// import './App.css'

function App() {

  marked.setOptions({
    breaks: true,
  });

  const [input, setInput] = useState(`# H1 
## H2 
[title](https://www.example.com) 
\`code\` 
\`\`\` 
{ 
  "firstName": "John", 
  "lastName": "Smith", 
  "age": 25 
} 
\`\`\` 
1. First item 
2. Second item 
3. Third item 

> blockquote 

![alt text](https://picsum.photos/400/200) 

**bold text**`)

  const handleInput = (e) => {
    const inputValue = e.target.value
    setInput(inputValue)
  }



  return (
    <div className=' bg-slate-800 p-2'>
      <div className=' flex justify-center flex-wrap mx-auto my-auto p-4'>
        <textarea name="" id="editor" className='bg-gray-300 w-[500px] h-[200px]  text-[10px] p-2' onChange={handleInput} value={input}></textarea>
        <div id='preview' className='bg-gray-300 w-[500px] h-auto  mt-5  p-2 overflow-scroll max-h-[200px]' dangerouslySetInnerHTML={{
          __html: marked(input)
        }}></div>
      </div>
      <p className="text-center text-gray-300 mt-4 text-[10px] font-bold">Created by Sam0042</p>
    </div>
  )
}

export default App
