exports.formatDates = (list) => {
  let formattedDataArr = [];

  for (let i = 0; i < list.length; i++) {
    const dataObj = list[i];
    const formattedDate = new Date(dataObj.created_at).toDateString();
    dataObj.created_at = formattedDate;
    formattedDataArr.push(dataObj);
  }

  return formattedDataArr;
}; 

exports.makeRefObj = (list) => {
  let refObj = {};

  for (let i = 0; i < list.length; i++) {
    const articleID = list[i].article_id;
    const title = list[i].title;
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
