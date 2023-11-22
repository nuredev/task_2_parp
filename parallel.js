const task = new Parallel([obj1, obj2, obj3]);

function save(obj) {
    obj.save();
    return obj;
}

task.map((obj) => obj.save()).then(function (result) {
    console.log(result);
});

