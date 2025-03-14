import { HiOutlineDotsHorizontal } from "react-icons/hi"

const TestCard = ({item, index}:any) => {
  return (
    <div
                  key={index}
                  className="flex flex-col rounded-2xl space-y-5  mt-5 w-[200px] md:w-[300px] lg:w-[700px]  mx-auto p-2 bg-gray-50"
                >
                  <div className="flex justify-between space-x-10 items-center text-gray-700">
                    <div className="flex items-center">
                      <div className="flex items-center text-xs space-x-4">
                        <img
                          className="h-6 w- bg-cover rounded-full"
                          src={item.avatar}
                          alt={item.username}
                        />
                        •<p className="">{item.time}</p>•
                        <div className="">{item.info}</div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-5">
                      <button className="text-white bg-blue-500 items-center justify-center flex min-w-[80px] rounded-lg">
                        Join
                      </button>
                      <HiOutlineDotsHorizontal className="text-gray-800 h-7 w-7" />
                    </div>
                  </div>
                  <p className="font-medium">{item.post.title}</p>
                  <div className="">
                    <img
                      className="w-full rounded-lg"
                      src={item.post.image}
                      alt="item"
                    />
                  </div>
                </div>
  )
}

export default TestCard
