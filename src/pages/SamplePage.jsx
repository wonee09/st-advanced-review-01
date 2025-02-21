import React from "react";

const SamplePage = () => {
  const {
    data: todoList,
    isPending: isTodoListPending,
    isError: isTodoListError,
  } = useQuery({
    queryKey: ["todos"],
    queryFn: async function () {
      try {
        const response = await jsonApi.get("/todos");
        return response.data;
      } catch (error) {
        console.log(error);
      }
    },
  });

  if (isTodoListPending) {
    return <div>Loading...</div>;
  }

  if (isTodoListError) {
    return <div>Error...</div>;
  }

  return <div>SamplePage</div>;
};

export default SamplePage;
