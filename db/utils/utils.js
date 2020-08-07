exports.formatDates = (list) => {
  let formattedDataArr = [];
  const dataArr = [...list];

  for (let i = 0; i < dataArr.length; i++) {
    const dataObj = dataArr[i];
    const formattedDate = new Date(dataObj.created_at).toDateString();
    dataObj.created_at = formattedDate;
    formattedDataArr.push(dataObj);
  }

  return formattedDataArr;
}; 

exports.makeRefObj = (list) => {
  const dataArr = [...list];
  let refObj = {};

  for (let i = 0; i < dataArr.length; i++) {
    const articleID = dataArr[i].article_id;
    const title = dataArr[i].title;
    refObj[title] = articleID;
  }
  return refObj;
};

exports.formatComments = (comments, articleRef) => {
  const commentsArr = [...comments];
  const articleKeys = Object.keys(articleRef);

  const formattedComments = [];

  for (let i = 0; i < comments.length; i++) {
    const comment = { ...commentsArr[i] };

    comment["author"] = comment["created_by"];
    delete comment["created_by"];

    comment["article_id"] = comment["belongs_to"];
    delete comment["belongs_to"];

    const formattedDate = new Date(comment.created_at).toDateString();
    comment.created_at = formattedDate;
    comment["article_id"] = articleRef[articleKeys[i]];

    formattedComments.push(comment);
  }

  return formattedComments;
};
