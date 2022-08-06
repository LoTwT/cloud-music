import PropTypes from "prop-types"
import BScroll from "better-scroll"
import styled from "styled-components"
import {
  forwardRef,
  PropsWithChildren,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react"
import { Nullable } from "../../types"

const ScrollContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`

interface IScrollProps {
  direction: "vertical" | "horizontal"
  click: boolean
  refresh: boolean
  onScroll: Nullable<(scroll: any) => void>
  pullUp: Nullable<() => void>
  pullDown: Nullable<() => void>
  pullUpLoading: boolean
  pullDownLoading: boolean
  bounceTop: boolean // 是否支持向上吸顶
  bounceBottom: boolean // 是否支持向下吸顶
}

const Scroll = forwardRef(
  (props: PropsWithChildren<Partial<IScrollProps>>, ref) => {
    const {
      direction = "vertical",
      click = true,
      refresh = true,
      onScroll = null,
      pullUpLoading = false,
      pullDownLoading = false,
      pullUp = null,
      pullDown = null,
      bounceTop = true,
      bounceBottom = true,
    } = props

    const [bScroll, setBScroll] = useState<Nullable<BScroll>>(null)

    const scrollContainerRef = useRef<Nullable<HTMLElement>>(null)

    useEffect(() => {
      if (!scrollContainerRef.current) return

      const scroll = new BScroll(scrollContainerRef.current, {
        scrollX: direction === "horizontal",
        scrollY: direction === "vertical",
        probeType: 3,
        click,
        bounce: {
          top: bounceTop,
          bottom: bounceBottom,
        },
      })

      setBScroll(scroll)

      return () => {
        setBScroll(null)
      }
    }, [])

    useEffect(() => {
      if (!bScroll || !onScroll) return

      bScroll.on("scroll", (scroll: any) => onScroll(scroll))

      return () => {
        bScroll.off("scroll")
      }
    }, [onScroll, bScroll])

    useEffect(() => {
      if (!bScroll || !pullUp) return

      bScroll.on("scrollEnd", () => {
        // 判断是否滑动到了底部
        if (bScroll.y <= bScroll.maxScrollY + 100) pullUp()
      })

      return () => {
        bScroll.off("scrollEnd")
      }
    }, [pullUp, bScroll])

    useEffect(() => {
      if (!bScroll || !pullDown) return

      bScroll.on("touchEnd", (pos: { x: number; y: number }) => {
        // 判断用户的下拉动作
        if (pos.y > 50) pullDown()
      })

      return () => {
        bScroll.off("touchEnd")
      }
    }, [])

    useEffect(() => {
      if (refresh && bScroll) bScroll.refresh()
    })

    useImperativeHandle(ref, () => ({
      refresh() {
        if (bScroll) {
          bScroll.refresh()
          bScroll.scrollTo(0, 0)
        }
      },
      getBScroll() {
        return bScroll
      },
    }))

    return (
      <ScrollContainer ref={scrollContainerRef}>
        {props.children}
      </ScrollContainer>
    )
  },
)

export default Scroll
