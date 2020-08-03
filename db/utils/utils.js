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
}

exports.makeRefObj = (list) => {};

exports.formatComments = (comments, articleRef) => {};
