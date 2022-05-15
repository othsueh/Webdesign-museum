王小明	85	90	100
張小花	85	95	99
李大強	90	90	80
劉老大	90	100	80
陳中胖	65	55	60
林小美	60	90	75
   select s.Name Student,
   (select s2.score
            from TestSchool.scores s2 
			left join TestSchool.courses c on( c.Id=s2.cid)
			where s2.sid = s.Id and c.id= 'C0000001' LIMIT 1) as '數學',
   (select s2.score
            from TestSchool.scores s2 
			left join TestSchool.courses c on( c.Id=s2.cid)
			where s2.sid = s.Id and c.id= 'C0000002' LIMIT 1) as '英文',
   (select s2.score
            from TestSchool.scores s2 
			left join TestSchool.courses c on( c.Id=s2.cid)
			where s2.sid = s.