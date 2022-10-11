export const charactersOrder = [
  'Cursed',
  'Diseased',
  'Lycan',
  'Bodyguard',
  'Werewolf',
  'Minion',
  'Cupid',
  'Witch',
  'Seer',
  'Hunter',
  'Maryor',
  'Paranormal Investigator',
  'Spellcaster',
  'Doppelganger',
  'Prince',
  'Tough guy',
  'Aura Seer'
]

export const oneNightWakeCharacters = [
  'Cursed',
  'Diseased',
  'Lycan',
  'Cupid',
  'Maryor',
  'Spellcaster',
  'Doppelganger',
  'Prince',
  'Tough guy',
  'Minion'
]

export const charactersCanKill = ['Werewolf', 'Witch', 'Hunter']
export const charactersCanSave = ['Bodyguard', 'Witch']

// Phe dân
export const list1 = [
  {
    title: 'Apprentice Seer',
    vietnamesse: 'Tiên tri tập sự',
    point: 3,
    detail:
      'Nếu Tiên Tri chết, Tiên tri tập sự sẽ trở thành Tiên tri mới. Tiên tri tập sự được thông báo  bằng cách trong đêm, vào lượt gọi Tiên tri, quản trò đụng vào vai của Tiên tri thực tập để gọi dậy.'
  },
  {
    title: 'Aura Seer',
    vietnamesse: 'Tiên tri hào quang',
    point: 3,
    detail:
      'Tiên tri hào quang thức dậy mỗi đêm để tìm kiếm người chơi có chức năng, không phải là Dân thường hay Sói.'
  },
  {
    title: 'Diseased',
    vietnamesse: 'Người bệnh',
    point: 3,
    detail:
      'Nếu Người bệnh bị Sói cắn, thì Sói sẽ không thể cắn người nào vào đêm tiếp theo do bị bệnh.'
  },
  {
    title: 'Bodyguard',
    vietnamesse: 'Bảo vệ',
    point: 3,
    detail:
      'Bảo vệ chọn 1 người khác nhau mỗi tối (nhưng ko được chọn người giống nhau 2 lần liên tiếp), người đó sẽ bất tử vào ban đêm'
  },
  {
    title: 'Cupid',
    vietnamesse: 'Thần tình yêu',
    point: -3,
    detail:
      'Thần tình yêu thức dậy đêm đầu và chọn 2 người bất kì để ghép đôi. 2 người được chọn sẽ được biết chức năng của nhau. 1 người chết thì người kia sẽ chết theo, nếu 2 người là 2 phe khác nhau thì sẽ tạo thành phe thứ 3'
  },
  {
    title: 'Hunter',
    vietnamesse: 'Thợ săn',
    point: +3,
    detail:
      'Nếu thợ săn chết (bất kể ngày hay đêm), hắn lập tức chỉ định bắn 1 người hoặc bắn lên trời.'
  },
  {
    title: 'Lycan',
    vietnamesse: 'Người hóa sói',
    point: -1,
    detail:
      'Có dòng máu của sói, và được xem như là Sói nếu như bị tiên tri soi.'
  },
  {
    title: 'Martyr',
    vietnamesse: 'Thiếu nữ',
    point: 3,
    detail:
      'Có thể thế chỗ bất kỳ ai bị treo cổ. Quản trò nên hỏi sau khi mn vote treo cổ 1 người xong.'
  },
  {
    title: 'Maryor',
    vietnamesse: 'Thị trưởng',
    point: 2,
    detail: 'Vote được tính là 2'
  },
  {
    title: 'Paranormal Investigator',
    vietnamesse: 'Thám tử',
    point: 3,
    detail:
      '1 đêm trong suốt game, Thám tử trọn 1 người và sẽ được biết rằng có ít nhất 1 Sói tính từ người bên trái, bên phải, và chính người bị chỉ có Sói hoặc ko'
  },
  {
    title: 'Priest',
    vietnamesse: 'Thầy tu',
    point: 3,
    detail:
      '1 đêm trong suốt game, Thầy tu chọn bất kì người nào để người đó được bất tử vào ban đêm, chỉ chết vào ban ngày do vote'
  },
  {
    title: 'Seer',
    vietnamesse: 'Tiên tri',
    point: 7,
    detail: 'Mỗi đêm soi 1 người để biết là Sói hay ko'
  },
  {
    title: 'Spellcaster',
    vietnamesse: 'Người phù phép',
    point: 1,
    detail:
      'Mỗi đêm, chọn 1 người để ngày tiếp theo họ sẽ bị câm, ko được nói nhưng vẫn đc vote và ám chỉ hành động'
  },
  {
    title: 'Tough guy',
    vietnamesse: 'Người cứng cỏi',
    point: 1,
    detail: 'Nếu bị sói cắn, chết vào đêm tiếp theo thay vì ngay đêm đó.'
  },
  {
    title: 'Villager',
    vietnamesse: 'Dân làng',
    point: 1,
    detail: 'None'
  },
  {
    title: 'Witch',
    vietnamesse: 'Phù thủy',
    point: 1,
    detail: 'Có thể cứu và giết người 1 lần duy nhất trong game'
  },
  {
    title: 'Prince',
    vietnamesse: 'Hoàng tử',
    point: 3,
    detail: 'Ko thể bị treo cổ chết, nếu bị vote thì sẽ lật bài'
  },
  {
    title: 'Cursed',
    vietnamesse: 'Kẻ bị nguyền rủa',
    point: -3,
    detail:
      'Kẻ bị Nguyền rủa ban đầu là người, Tiên tri soi cũng ra người. Nếu Kẻ bị Nguyền rủa bị Sói cắn thì sẽ không chết, mà từ đêm tiếp theo sẽ biến thành Sói, đồng thời nếu Tiên tri sói thì cũng sẽ là Sói. Kẻ bị Nguyền rủa mỗi đêm được gọi dậy riêng biệt, kể cả sau khi hóa Sói, để cho người này biết đã bị hóa Sói hay chưa.'
  },
  {
    title: 'Doppelganger',
    vietnamesse: 'Nhân bản',
    point: -2,
    detail:
      'Vào đêm đầu tiên, Nhân bản tỉnh dậy và lựa chọn một người chơi. Nếu người chơi kia chết trong đêm, Nhân bản sẽ bí mật lấy chức năng của người đó. Trước khi có chức năng mới, Nhân bản theo Phe dân. Sau khi có chức năng mới, Nhân bản theo phe của chức năng này.'
  },
  {
    title: 'Drunk',
    vietnamesse: 'Say rượu',
    point: 4,
    detail:
      'Trong hai đêm đầu tiên, Say rượu sẽ thuộc phe Dân làng. Vào đêm thứ ba, Quản trò sẽ gọi anh ta dậy và cho anh ta biết vai trò thực sự của mình là gì bằng cách chuẩn bị sẵn một bộ bài có 1 Sói, 1 Dân và hầu hết các chức năng đặc biệt và rút ra 1 lá. Lá được chọn là chức năng thật sự của Say rượu. Say rượu được Tiên tri soi là Người.'
  }
]

export const list2 = [
  {
    title: 'Minion',
    vietnamesse: 'Kẻ phản bội',
    point: -6,
    detail: 'Ko thức dậy cùng Sói và biết Sói là ai. Tiên tri ko soi đc là Sói'
  },
  {
    title: 'Sorceress',
    vietnamesse: 'Pháp sư sói',
    point: -3,
    detail:
      'Mỗi đêm, Pháp sư sói thức dậy và sẽ đi tìm kiếm Tiên tri bằng cách chỉ thị một người, Quản trò sẽ cho biết đó có phải Tiên tri hay không. Sói không được biết Pháp sư Sói là ai  và Pháp sư sói cũng không biết Sói là ai. Tiên tri sẽ soi Pháp sư sói là người.'
  },
  {
    title: 'Werewolf',
    vietnamesse: 'Ma sói',
    point: -6,
    detail:
      'Thức dậy cùng nhau và thống nhất giết 1 nạn nhân nào đó. Có thể ko giết người nào và không đc giết sói khác'
  },
  {
    title: 'Lone Wolf',
    vietnamesse: 'Sói cô đơn',
    point: -5,
    detail:
      'Hằng đêm, thức dậy cùng những con Sói khác. Sói cô đơn chỉ thắng cuộc nếu là người chơi cuối cùng trong trò chơi.'
  },
  {
    title: 'Wolf Cub',
    vietnamesse: 'Sói con',
    point: -8,
    detail:
      'Sói con là Sói và thức dậy cùng Sói mỗi đêm. Nếu Sói con bị giết, Sói còn lại sẽ giết 2 người vào đêm hôm sau. Sói có thể chọn giết Sói Con như 1 sự hy sinh ( Tất cả Sói bao gồm cả Sói con đều đồng ý việc đó). Khi đó Sói có thể lập tức giết 2 người chơi khác vào ngay đêm hôm đó.'
  }
]

export const list3 = [
  {
    title: 'Cult Leader',
    vietnamesse: 'Trưởng giáo phái',
    point: 1,
    detail:
      'Mỗi đêm, Trưởng giáo phải sẽ tỉnh dậy và thêm 1 người chơi vào giáo phái của mình. Nếu tất cả những người còn sống đều là người của giáo phái của mình, Trưởng giáo phái sẽ là người chiến thắng. Các điều kiện thắng khác cũng được áp dụng.'
  },
  {
    title: 'Tanner',
    vietnamesse: 'Kẻ chán đời',
    point: -2,
    detail:
      'Chán đời chỉ thắng khi anh ta bị giết. Các điều kiện thắng khác cũng được áp dụng.'
  },
  {
    title: 'Vampire',
    vietnamesse: 'Ma cà rồng',
    point: -7,
    detail:
      'Là 1 thế lực mạnh thứ 3 ngoài Phe Sói và Phe dân. Mỗi đêm, Ma cà rồng sẽ chọn 1 người chơi là nạn nhân. Nhưng nạn nhân của Ma cà rồng sẽ được công bố sau khi phiên treo cổ diễn ra. Vampire không thể bị giết bởi Ma sói vào ban đêm.'
  }
]
