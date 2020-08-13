var db = require('./db');

module.exports ={
  getAll:function(callback){
		var sql = "select * from users";
		db.getResults(sql, function(results){
			if(results.length > 0){
				callback(results);
			}else{
				callback([]);
			}
		});
	},

  getById: function(id, callback){
		var sql = "select * from users where id="+id;
		db.getResults(sql, function(result){
      console.log('user module error')
			if(result.length > 0){
				callback(result[0]);
			}else{
				callback([]);
			}
		});
	},

  insert: function(user, callback){
		var sql = "insert into users values('', '"+user.name+"', '"+user.username+"', '"+user.password+"', '"+user.phone+"', '"+user.address+"', '"+user.gender+"', '"+user.userType+"')";

		console.log(sql);

		db.execute(sql, function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	},

  update: function(user, callback){
		var sql = "update users set password='"+user.password+"', phone='"+user.phone+"' ,address='"+user.address+"' where id='"+user.id+"'";
		db.execute(sql, function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	},

  delete: function(id, callback){
		var sql = "delete from users where id="+id;
		db.execute(sql, function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	}

}
