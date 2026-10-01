import type { KnowledgeCategory, LibraryState, Question } from './types'

const KEY = 'badu-wen-library-v1'
const now = Date.now()

export const starterState: LibraryState = {
  version: 1,
  categories: [
    { id: 'cat-mysql', name: 'MySQL', order: 0, createdAt: now },
    { id: 'cat-redis', name: 'Redis', order: 1, createdAt: now },
    { id: 'cat-java', name: 'Java', order: 2, createdAt: now },
  ],
  questions: [
    { id: 'q-index', categoryId: 'cat-mysql', title: 'MySQL 索引是什么？', answer: '索引是帮助 MySQL **高效获取数据**的数据结构。\n\n常见的 InnoDB 索引使用 **B+ 树**，叶子节点按顺序连接，适合范围查询。', status: 'unfamiliar', order: 0, createdAt: now, updatedAt: now },
    { id: 'q-redis-fast', categoryId: 'cat-redis', title: 'Redis 为什么这么快？', answer: '- 基于内存读写\n- 单线程事件循环避免线程切换开销\n- 高效的数据结构\n- 使用 I/O 多路复用处理网络请求', status: 'unknown', order: 0, createdAt: now, updatedAt: now },
    { id: 'q-hashmap', categoryId: 'cat-java', title: 'HashMap 的底层结构是什么？', answer: 'JDK 8 中 HashMap 由数组、链表和红黑树组成。当链表长度达到阈值时，会转换为红黑树。', status: 'unfamiliar', order: 0, createdAt: now, updatedAt: now },
  ],
}

export function loadState(): LibraryState {
  try {
    const saved = localStorage.getItem(KEY)
    if (!saved) return starterState
    const parsed = JSON.parse(saved) as LibraryState
    if (parsed.version !== 1 || !Array.isArray(parsed.categories) || !Array.isArray(parsed.questions)) return starterState
    return parsed
  } catch { return starterState }
}

export function saveState(state: LibraryState) { localStorage.setItem(KEY, JSON.stringify(state)) }

export function createId(prefix: string) { return `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}` }
